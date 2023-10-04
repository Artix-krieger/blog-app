import {Container, PostForm} from "../components/index.js";

export function AddPost() {
    return (
        <div className='py-8'>
            <Container>
                <PostForm/>
            </Container>
        </div>
    )
}