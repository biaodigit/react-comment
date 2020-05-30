import request from '@/utils/request'

export const FETCH_DATA = 'FETCH DATA'

export default (store: any) => (next: any) => (action: any) => {
    const callAPI = action[FETCH_DATA]
    if (Object.is(callAPI, undefined)) {
        return next(action)
    }

    const { endpoint, schema, types } = callAPI

    if (typeof endpoint !== 'string') {
        throw new Error('endpoint必须为字符串类型URL')
    }
    if (!schema) {
        throw new Error('必须指定领域实体的schema')
    }
    if (!Array.isArray(types) && types.length !== 3) {
        throw new Error('需要指定包含三个action type数组')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('action type必须为字符串')
    }

    const actionWith = (data:any):any => {
        const finalAction = [...action,...data]
        delete finalAction[FETCH_DATA]
        return finalAction
    }

    const [requestType, successType, failureType] = types
    next(actionWith({ type: requestType }))
    return fetchData(endpoint, schema).then(
        response => next(actionWith({
            type: successType,
            response
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || '获取数据失败'
        }))
    )
}

const fetchData = (endpoint: string, schema: any) => {
    return request.get(endpoint).then((data: any) => {
        return normalizeData(data, schema)
    })
}

// 根据schema对数据进行扁平化处理
const normalizeData = (data: any, schema: any) => {
    const { id, name } = schema
    let kvObj = Object.create(null)
    let ids = []
    if (Array.isArray(data)) {
        data.forEach((item: any) => {
            kvObj[item[id]] = item
            ids.push(item[id])
        })
    } else {
        kvObj[data[id]] = data
        ids.push(data[id])
    }
    return {
        [name]: kvObj,
        ids
    }
}