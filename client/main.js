import {Template} from 'meteor/templating';

import './main.html';

Template.tirarFoto.events({
    'click .capture': function () {
        MeteorCamera.getPicture({}, function (error, data) {
            console.log(data);
            Session.set('foto', data);
        });
    }
});

Template.tirarFoto.helpers({
    'foto': function () {
        return Session.get('foto');
    }
});