const booking = require("../models/booking");

class bookingRepository{

    async create(data={}, transaction=null){
        return await booking.create(data, {transaction});
    }

    async findOne(cond={}, transaction=null){
        return await booking.findOne({where:cond, transaction})
    }

    async update(data={}, cond={}, transaction=null){
        return await booking.update(data, {where:cond, transaction})
    }

    async delete(cond={}, transaction=null){
        return await booking.destroy({where:cond, transaction})
    }
}

export default bookingRepository;