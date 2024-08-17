const slot = require("../models/slot");

class slotRepository{

    async create(data={}, transaction=null){
        return await slot.create(data, {transaction});
    }

    async findOne(cond={}, transaction=null){
        return await slot.findOne({where:cond, transaction})
    }

    async update(data={}, cond={}, transaction=null){
        return await slot.update(data, {where:cond, transaction})
    }

    async delete(cond={}, transaction=null){
        return await slot.destroy({where:cond, transaction})
    }
}

export default slotRepository;