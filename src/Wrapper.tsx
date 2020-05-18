import React, { Component } from 'react'

const BorderHoc = WrappedComponent => class extends Component {
  public componentDidMount() {
      console.log('boreder hoc')
  }
  public render() {
    return <div style={{ border: 'solid 1px red' }}>
      <WrappedComponent />
    </div>
  }
}
export default BorderHoc