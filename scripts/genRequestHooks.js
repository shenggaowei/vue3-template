/**
 *  Usage: node scripts/genRequestHooks.js -i OrgMember/index.ts -o OrgMember/hooks.ts
 *  根据 services/xxx.ts 生成 hooks/xxx.ts
 **/
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const program = new Command();
const { Project } = require("ts-morph");

// 首字母大写
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const pathPrefix = path.join(__dirname, "../src/services/");

program
  .option("-i, --input <file>", "文件读取的路径")
  .option("-o, --output <output>", "文件输出的路径");
program.parse(process.argv);

const options = program.opts();

// 创建一个新的 TypeScript 项目
const project = new Project();

// 添加要读取的文件
const file = project.addSourceFileAtPath(pathPrefix + options.input);

// 获取所有导出的函数
const exportsFunction = file.getExportedDeclarations();

const match = options.input.match(/(.*)\/index\.ts/);

let output = `import { useRequest } from "vue-request";\nimport * as Service from '@/services/${match[1]}';\n\n`;

exportsFunction.forEach((declaration, name) => {
  if (declaration[0].getKindName() === "FunctionDeclaration") {
    output += `export function use${capitalizeFirstLetter(name)}() {
  return useRequest(Service.${name}, {
    manual: true,
  });
}\n\n`;
  }
});

// 写入新的文件
fs.writeFileSync(pathPrefix + options.output, output);

console.log("生成成功", `services/${options.output}`);
