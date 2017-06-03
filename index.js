var exec = require("child_process").exec;
var path = require("path");

var debug = require("debug")("index");
var chalk = require("chalk");

var config = require("./package.json");
var jarPath = path.resolve(__dirname, "bin", "poi-converter-" + config.jarVersion + "-jar-with-dependencies.jar")
debug("Jar version is %s", chalk.blue(config.jarVersion));

function getPath(src) {
    var str = src;
    if (!path.isAbsolute(str)) {
        str = path.join(process.cwd(), str);
    }
    return str.replace(/[\\\/]/gi, path.sep);
}

exprots = module.exports = {
    jarPath: `${jarPath}`,
    to: function(src, dst, callback) {
        if (!src || !dst) {
            return callback && callback(new Error("参数异常"), '', { success: false });
        }
        let finalSrc = getPath(src);
        let finalDst = getPath(dst);
        let command = ["java", `-jar "${jarPath}"`, `"${finalSrc}"`, `"${finalDst}"`].join(" ");

        debug("The command is: %s", chalk.blue(command));
        exec(command, function(err, stdout, stderr) {
            var isSuccess = false;
            var out = (stdout || "") + (stderr || "");
            if (err instanceof Error) {
                return callback && callback(err, '', { success: false });
            }
            var reg = /Convert from (.+?) to (.+?) in (\d+?) ms/gi;
            if (out && typeof out === "string") {
                let arr = reg.exec(out);
                if (arr && arr.length > 0) {
                    return callback && callback(null, out, { success: true, cost: Number.parseInt(arr[3], 10), src: arr[1], dst: arr[2] });
                }
            }
            return callback && callback(new Error("装换失败"), out, { success: false });
        });
    }
}