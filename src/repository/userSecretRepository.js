const user_secret = require("../models/user_secret");

class userSecretsRepository{

    async create(data={}, transaction=null){
        return await user_secret.create(data, {transaction});
    }

    async findOne(cond={}, transaction=null){
        return await user_secret.findOne({where:cond, transaction})
    }

    async update(data={}, cond={}, transaction=null){
        return await user_secret.update(data, {where:cond, transaction})
    }

    async delete(cond={}, transaction=null){
        return await user_secret.destroy({where:cond, transaction})
    }
}

export default userSecretsRepository;