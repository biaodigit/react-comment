export default {
    getProductList: (path:string,rowIndex:number,pageSize:number) => 
    `/${path}-data?rowIndex=${rowIndex}&pageSize=${pageSize}`
}