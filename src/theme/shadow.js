export default function shadow(color) {
    return {
        shadowColor: color,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 5,
    }
}