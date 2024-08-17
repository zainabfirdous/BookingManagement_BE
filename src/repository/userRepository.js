const user = require("../models/user");

class userRepository{

    async create(data={}, transaction=null){
        return await user.create(data, {transaction});
    }

    async findOne(cond={}, transaction=null){
        return await user.findOne({where:cond, transaction})
    }

    async update(data={}, cond={}, transaction=null){
        return await user.update(data, {where:cond, transaction})
    }

    async delete(cond={}, transaction=null){
        return await user.destroy({where:cond, transaction})
    }
}

export default userRepository;