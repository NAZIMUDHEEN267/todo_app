export default function shadow(color) {
    return {
        elevation: 5,
        shadowColor: color,
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }
}