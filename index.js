

const {SelectQueryBuilder} = require('./SelectQueryBuilder.js');

function createQueryBuilder(entityOrRunner, alias, queryRunner) {

    if (alias) {
        var metadata = this.getMetadata(entityOrRunner);
        return new SelectQueryBuilder(this, queryRunner)
            .select(alias)
            .from(metadata.target, alias);
    }
    else {
        return new SelectQueryBuilder(this, entityOrRunner);
    }
};

module.exports = {
    SelectQueryBuilder: SelectQueryBuilder,
    createQueryBuilder
}