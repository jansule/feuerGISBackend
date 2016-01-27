"use strict";

/**
 *  @desc definition mongodb schemata
 */

module.exports = function(mongoose) {
    var shortid = require('shortid');
    
    var datensatz = new mongoose.Schema({
        Basiskarten: String,
        Fachkarten: Object,
        Daten_ohne_Raumbezug: [Object]
    });
    var einsatz = new mongoose.Schema({
        id: {
            type: String,
            unique: true        },
        meta: {
            einsatzstichwort: String,
            einsatzort: String,
            meldender: String,
            objektNr: String,
            datumUhrzeitGruppe: String
        },
        drawnObjects: Array,
        map: {
            zoom: Number,
            center: Object,
            tileServer: String
        },
        taktZeichen: {
            kranzposition: Number,
            kartenposition: Object,
            zeichen: Object
        },
        locked: Boolean	
    });
    var taktZeichen = new mongoose.Schema({
        id: {
            type: String,
            unique: true
        },
        Kategorie: String,
        Titel: String,
        Svg: String
    });
    var models = {
        datensaetze: mongoose.model('Datensaetze', datensatz),
        einsaetze: mongoose.model('Einsatz', einsatz),
        taktZeichens: mongoose.model('TaktZeichen', taktZeichen)
    };

    return models;
}