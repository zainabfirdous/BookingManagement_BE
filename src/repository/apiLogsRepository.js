const api_log = require("../models/api_log");

class apiLogsRepository{

    async create(data={}, transaction=null){
        return await api_log.create(data, {transaction});
    }

    async findOne(cond={}, transaction=null){
        return await api_log.findOne({where:cond, transaction})
    }

    async update(data={}, cond={}, transaction=null){
        return await api_log.update(data, {where:cond, transaction})
    }

    async delete(cond={}, transaction=null){
        return await api_log.destroy({where:cond, transaction})
    }
}

export default apiLogsRepository;