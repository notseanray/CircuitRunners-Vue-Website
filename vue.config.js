module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(pdf|csv)$/,
                    loader: "file-loader",
                    options: {
                        name: `files/[name].[ext]`,
                    },
                },
            ],
        },
    },
};
