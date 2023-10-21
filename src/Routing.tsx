import { Route, Routes } from "react-router-dom";
import { Register } from "./components/user/register/Register";
import Layout from "./components/layout/Layout";
import { Login } from "./components/user/login/Login";
import Home from "./components/Home/Home";
import { TransactionsPage } from "./components/Transactions/TransactionsPage";
import TransactionItemDetails from "./components/Transactions/TransactionItemDetails/TransactionItemDetails";
import ChallangesList from "./components/Challanges/ChallangesList";
import ChallangeDetails from "./components/Challanges/ChallengeDetails";
import UserDashboard from "./components/user/UserDashboardPage/UserDashboard";
import { InitiativesList } from "./components/Initiatives/InitiativesList";
import InitiativeDetails from "./components/Initiatives/InitiativeDetails";

export const Routing = () => {
    return (<Routes>
        <Route path="/" element={<Layout />}>
            <Route element={<Home />} index />
            <Route element={<UserDashboard />} path="user-dashboard" />
            <Route path="initiatives" element={<InitiativesList />} />
            <Route path="initiatives/details/:id" element={<InitiativeDetails />} />
            <Route path="challenges" element={<ChallangesList />} />
            <Route path="challenges/details/:id" element={<ChallangeDetails />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="transactions/details/:id" element={<TransactionItemDetails />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
        </Route>
    </Routes >
    )
}

export default Routing;