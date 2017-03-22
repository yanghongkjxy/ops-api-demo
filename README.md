# ops-api-demo
## 使用
- 进入Ops Manager -> Settings -> Public API Access -> API Keys -> Generate
- 复制生成的API Key（注意这个Key不会再次以明文出现，所以请做好备份）
- 修改API配置：
  - vim config/default.json
  - 填入当前登录Email和刚才获取的API Key
- 修改要观察的组（此部分目前硬编码）
  - vim routes/api.js
  - `host`改为OpsManager地址（不带端口）
  - `port`改为端口
  - `path`改为：`/api/public/v1.0/groups/[group id]/hosts/[host id]/metrics/`
    - 任意进入一个实例的监控界面，复制URL。如：http://ec2-54-250-238-156.ap-northeast-1.compute.amazonaws.com:8080/v2/58d2225728c3cc29b814dd54#host/detail/164489644debf94aaf9813dd3786bbc4/status
    - 其中`58d2225728c3cc29b814dd54`为[group id], `164489644debf94aaf9813dd3786bbc4`为[host id]
- 启动demo
  - bin/www
  - demo默认使用3000端口，使用浏览器打开，访问：http://[ip]:3000/opcounter
