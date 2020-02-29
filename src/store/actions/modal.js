const ModalActions = {
    updateCity(city) {
        return {
            type: 'UPDATE_CITY',
            city
        }
    },
    updateCourse(course) {
        return {
            type: 'UPDATE_COURSE',
            course
        }
    },
    updatePresential(presential) {
        return {
            type: 'UPDATE_PRESENTIAL',
            presential
        }
    },
    updateRemotely(remotely) {
        return {
            type: 'UPDATE_REMOTELY',
            remotely
        }
    },
    updatePrice(price) {
        return {
            type: 'UPDATE_PRICE',
            price
        }
    }
}

export default ModalActions;