import '../ProductDetail.css'
import Rating from '@mui/material/Rating'
export default function ProductStarRating() {
    return (
        <Rating name="rating" defaultValue={2.5} precision={1} size={'small'}/>
    )
}