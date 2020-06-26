import * as React from "react"
import ProductOverview from "./components/product_overview"
import "./index.scss"

class ProductDetail extends React.Component<{},{}> {
    public render() {
        return <ProductOverview/>
    }
}

export default ProductDetail