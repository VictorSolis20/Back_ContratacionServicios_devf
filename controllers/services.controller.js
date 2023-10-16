const { response, request } = require("express");

//Model - Schema
const Service = require("../models/services.model")


//Read
const serviceGet = async (req = request, res = response) => {
    try {
        const queryParam = { active: true };
        const NumeroEntradas = await Service.countDocuments();
        const servicio = await Service.find(queryParam);
        res.status(200).json({
            total: NumeroEntradas,
            message: "Usuarios Route desde controller",
            servicio
        });
    } catch (error) {
        res.status(500).json({
            message: "Algo ocurrio cuando buscabamos usuarios",
        });
    }
};

//Create
const servicePost = async (req = request, res = response) => {
    try {
        const { name, active, price } = req.body;
        const data = { name, active, price };

        const service = new Service(data);
        await service.save();

        res.status(200).json({
            message: "Servicios Route desde controller -- POST",
            service
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error
        });
    }
};

//Update
const servicePut = async (req = request, res) => {
    try {
        const { id } = req.params;
        const { name, active, price } = req.body
        const data = { name, active, price }

        await Service.findByIdAndUpdate(id, data)

        res.status(200).json({
            message: "Servicios modificados con exito",
            ok: true
        });
    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal cuando intentabamos actualizar el servicio",
        });
    }
};

//Delete
const serviceDel = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const falseActive = { active: false };
        await Service.findByIdAndUpdate(id, falseActive);

        res.status(200).json({
            message: `El Servicio con el ${id} fue eliminado`,
        });
    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal cuando intentabamos eliminar el servicio",
        });
    }
};

module.exports = {
    serviceGet,
    servicePost,
    servicePut,
    serviceDel,
};
