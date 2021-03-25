export const addToList = (movieId) => (
    $.ajax({
        method: 'POST',
        url: `/api/list/`,
        data: {movieId}
    })
)

export const deleteFromList = (movieId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/list/`,
        data:{movieId}
    })
)