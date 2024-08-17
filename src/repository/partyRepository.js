const partyHall = require("../models/partyHall")

class partyRepository{
    async create(data={}, transaction=null){
        return await partyHall.create(data, {transaction});
    }

    async findOne(cond={}, transaction=null){
        return await partyHall.findOne({where:cond, transaction})
    }

    async update(data={}, cond={}, transaction=null){
        return await partyHall.update(data, {where:cond, transaction})
    }

    async delete(cond={}, transaction=null){
        return await partyHall.destroy({where:cond, transaction})
    }
}

export default userRepository;