import * as esbuild from "esbuild";
import { exec } from "child_process";

["zh-CN", "en-US", "ja-JP"].forEach(async lang => {
    const entryPoints = ["./src/index.js"];

    const options = {
        entryPoints,
        outfile: `./dist/index.${lang}.js`,
        format: "esm",
        keepNames: true,
        bundle: true,
        minify: true,
        sourcemap: true,
        metafile: true,
        target: "esnext",
        treeShaking: true,
        define: {
            "process.env.lang": JSON.stringify(lang)
        }
    }

    const result = await esbuild.build(options);
    const text = await esbuild.analyzeMetafile(result.metafile, { verbose: true });
    console.log(text);

    exec(`babel --out-file ./dist/index.${lang}.js ./dist/index.${lang}.js`);
});