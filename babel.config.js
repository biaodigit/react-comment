module.exports = (api) => {
    api.cache(true)
    const presets = [
        [
            "@babel/preset-env",
            {
                modules: false
            }
        ],
        "@babel/preset-react"
    ]

    const plugins = [
        "@babel/plugin-proposal-object-rest-spread",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "react-hot-loader/babel"
    ]

    return {
        presets,
        plugins
    }
}