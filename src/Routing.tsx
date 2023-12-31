import { Route, Routes } from "react-router-dom";
import { Register } from "./components/user/register/Register";
import Layout from "./components/layout/Layout";
import { Login } from "./components/user/login/Login";
import Home from "./components/Home/Home";
import { TransactionsPage } from "./components/Transactions/TransactionsPage";
import TransactionItemDetails from "./components/Transactions/TransactionItemDetails/TransactionItemDetails";
import ChallengesList from "./components/Challenges/ChallengesList";
import ChallengeDetails from "./components/Challenges/ChallengeDetails";
import UserDashboard from "./components/user/UserDashboardPage/UserDashboard";
import { InitiativesList } from "./components/Initiatives/InitiativesList";
import InitiativeDetails from "./components/Initiatives/InitiativeDetails";
import InvestDetails from "./components/Invest/InvestDetails";
import { InvestList } from "./components/Invest/InvestList";

export const Routing = () => {
    return (<Routes>
        <Route path="/" element={<Layout />}>
            <Route element={<Home />} index />
            <Route element={<UserDashboard />} path="user-dashboard" />
            <Route path="initiatives" element={<InitiativesList />} />
            <Route path="initiatives/details/:id" element={<InitiativeDetails />} />
            <Route path="challenges" element={<ChallengesList />} />
            <Route path="challenges/details/:id" element={<ChallengeDetails />} />
            <Route path="invest" element={<InvestList />} />
            <Route path="invest/details/:id" element={<InvestDetails />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="transactions/details/:id" element={<TransactionItemDetails />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
        </Route>
    </Routes >
    )
}

export default Routing;