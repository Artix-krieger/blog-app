import {useState, useEffect} from "react";
import {Container, PostForm} from "../components/index.js";
import {service} from "../appwrite/config.js";
import {useNavigate, useParams} from "react-router-dom";

export function EditPost() {

    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            })
        } else {
            navigate("/");
        }

    }, [slug, navigate]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}