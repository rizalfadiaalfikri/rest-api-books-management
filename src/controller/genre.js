import sequelize from "../model/index.js";

const Genre = sequelize.models.Genre;

const getGenres = async (req, res, next) => {
    try {
        const genres = await Genre.findAll();
        
        res.status(200).json({
            status: true,
            message: 'Genres found',
            data: genres
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const createGenre = async (req, res, next) => {
    try {
        const data = req.body
        const genre = await Genre.create(data)

        res.status(201).json({
            status: true,
            message: 'Genre created',
            data: genre
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

const updateGenre = async (req, res, next) => {
    const data = req.body
    const { id } = req.params

    try {
        const existingGenre = await Genre.findByPk(id)

        if(!existingGenre) {
            res.status(404).json({
                status: false,
                message: 'Genre not found'
            })
        }
        const updateGenre = await existingGenre.update(data)
        res.status(200).json({
            status: true,
            message: 'Genre updated',
            data: updateGenre
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }

}

const deleteGenre = async (req, res, next) => {
    console.log('HELLo')
    try {
        
        const { id } = req.params

        const existingGenre = await Genre.findByPk(id)

        if(!existingGenre) {
            res.status(404).json({
                status: false,
                message: 'Genre not found'
            })
        }

        const deletedGenre = await existingGenre.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: true,
            message: 'Genre has successfully deleted',
            data: deletedGenre
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

export {
    getGenres, createGenre, updateGenre, deleteGenre
}