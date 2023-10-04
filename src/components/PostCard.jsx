import {service} from "../appwrite/config";
import {Link} from "react-router-dom";
import parse from "html-react-parser";

export function PostCard({$id, title, featuredImage, content}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={service.getFilePreview(featuredImage)} alt={title}
                         className="rounded-xl"/>
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {parse(content)}
                </p>

                <p
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                    Read more

                    <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                            &rarr;
                    </span>
                </p>
            </div>
        </Link>
    )
}