'use strict';

const surveys = [
    {
        id: 1,
        name: 'Survey 1'
    },
    {
        id: 2,
        name: 'Survey 2'
    },
    {
        id: 3,
        name: 'Survey 3'
    }
];

module.exports = {

    load: (app) => {
        return app.orm.Survey.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            // Create surveys.
            return Promise.all(
              surveys.map(survey => {
                  return app.orm.Survey.create(survey);
              })
            );
        })
        .then(surveys => {
            app.log.info('Surveys created');
            return surveys;
        });
    }

};
