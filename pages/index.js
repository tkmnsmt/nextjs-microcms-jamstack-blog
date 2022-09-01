import Link from "next/link";
import { client } from "../libs/client";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog" });

    return {
        props: {
            blogs: data.contents,
        },
    };
};

const Home = ({ blogs }) => {
    return (
        <div>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
