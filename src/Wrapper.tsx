import * as React from 'react'

type injectProps = {
  error:string
}

const BorderHoc = (WrappedComponent: React.ComponentType) => class extends React.Component {
  public componentDidMount() {
      console.log(this.props)
  }
  public render() {
    return <div>
      <WrappedComponent {...this.props}/>
    </div>
  }
}
export default BorderHoc