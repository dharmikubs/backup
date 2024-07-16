import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Team from "../Pages/Team";
import Telecaller from "../Pages/Telecaller";
import Sesssioninvites from "../Pages/Sesssioninvites";
import Invitetemplate from "../Pages/Invitetemplate";
import Teamdetail from "../Pages/Teamdetail";
import Template from "../Pages/Template";
import CreateTemplate from "../Pages/CreateTemplate";
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//     },
//     {
//         path: '/signin',
//         element: <Signin />,
//     },
//     {
//         element: <Layout />,
//         children: [{
//             path: '/team',
//             element: <Team />,
//             children: [{
//                 path: ":teamdetail",
//                 element: <Teamdetail />,
//             },]
//         },
//         {
//             path: '/telecaller',
//             element: <Telecaller />
//         },
//         {
//             path: '/sessioninvite',
//             element: <Sesssioninvites />
//         },
//         {
//             path: '/invitetemplate',
//             element: <Invitetemplate />
//         },]

//     },


// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route element={<Layout />}>
                <Route path="team" element={<Team />} />
                <Route path="/team/detail" element={<Teamdetail />} />
                <Route path="telecaller" element={<Telecaller />} />
                <Route path="sessioninvite" element={<Sesssioninvites />} />
                <Route path="invitetemplate/template" element={<Template />} />
                <Route path="invitetemplate/createtemplate" element={<CreateTemplate />} />
            </Route>
        </>

    )
)
export default router;
