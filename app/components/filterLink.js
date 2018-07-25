const FilterLink = ({
    filter,
    children
}) => {
    return (
        <TouchableHighlight
            onPress={() =>
                store.dispatch({
                    type='SET_VISIBILITY_FILTER',
                    filter
                })
            }
        >
        {children}
        </TouchableHighlight>
    )
}