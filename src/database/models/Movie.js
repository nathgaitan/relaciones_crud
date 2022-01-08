module.exports= (sequelize, dataTypes) => {
    
    const alias = 'Pelicula' //conviene en español si usamos ingles en las tablas. El alias se usa para hacer las consultas

    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title : {
            type: dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {  
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date : {
            type: dataTypes.DATE,
            allowNull : false
        },
        length : {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }

    const config = {
        tableName : 'movies', //si el nombre de la tabla no es el plural del nombre del modelo se aclara así
        
        timestamps : true, //si tiene marcas de tiempo esto no va, pero si NO TIENE se aclara sino da error porque sequelize espera que tenga marcas de tiempo. Se configura timestamps: false
        underscored : true //si está escrito con guion bajo (-) ej: updated_at
    }

    const Movie = sequelize.define(alias,cols,config) //devuelve lo que recibe el metodo define de sequelize

    return Movie

}