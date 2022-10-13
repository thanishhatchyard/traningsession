import { Fragment } from "react";
import Link from 'next/link';
import MainWrapper from "../../components/MainWrapper";

function PostsPage () {
    return (
        <MainWrapper>
            <div>
                <h1>Posts Page</h1>
                <br />

                <Link href="/posts/3434">Click Here To Test</Link>
                <br />
                <Link href="/posts/45654dfgdfg">Click Here To Test 2</Link>
            </div>
        </MainWrapper>
    )
}

export default PostsPage;