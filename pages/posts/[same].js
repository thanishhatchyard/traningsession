import {useRouter} from 'next/router';
import classes from '../../styles/MyClasses.module.css';

function PostDetail () {
    const router = useRouter();

    const postId = router.query.same;

    return (
        <div>
            <div className={classes.card}>Post Details Page {postId}</div>
        </div>
    )
}

export default PostDetail;