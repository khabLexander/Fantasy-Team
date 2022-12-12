import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRegisterPage } from "../auth/pages/LoginRegisterPage";
import { CheckingAuth } from "../components/CheckingAuth";
import { useCheckOut } from "../hooks/useCheckout";
import { ContactPage } from "../pages/Contact/ContactPage";
import { CreateFantasyTeamPage } from "../pages/Create/CreateFantasyTeamPage";
import { FantasyTeamPage } from "../pages/FantasyTeams/FantasyTeamPage";
import { FantasyTeamsPage } from "../pages/FantasyTeams/FantasyTeamsPage";
import { LeaguePage } from "../pages/League/LeaguePage";
import { MainPage } from "../pages/Main/MainPage";
import PlayerPage from "../pages/Player/PlayerPage";
import { SearchPlayerPage } from "../pages/SearchPlayer/SearchPlayerPage";
import { SearchTeamPage } from "../pages/SearchTeam/SearchTeamPage";
import { TeamPage } from "../pages/Team/TeamsPage";

export const MainRouter = () => {
  const { status } = useCheckOut();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
            <Routes>
                {     
                    status === 'authenticated'
                    ? 
                    <>
                        <Route path='/*' element={<MainPage/>}/>
                        <Route path='/create-fantasy' element={<CreateFantasyTeamPage/>}/>
                        <Route path='/fantasy-teams' element={<FantasyTeamsPage/>}/>
                        <Route path='/contact' element={<ContactPage/>}/>
                        <Route path='/league/:leagueId' element={<LeaguePage/>}/>
                        <Route path='/team/:teamId' element={<TeamPage/>}/>
                        <Route path='/fantasy-team/:fantasyTeamId' element={<FantasyTeamPage/>}/>
                        <Route path="/player/:playerId" element={<PlayerPage />} />
                        <Route path="/search-players" element={<SearchPlayerPage />} />
                        <Route path="/search-teams" element={<SearchTeamPage />} />
                    </>
                    :
                    <Route path='/auth/' element={<LoginRegisterPage/>}/>
                }
                <Route path='/*' element={<Navigate to='/auth/'/> }/>

            </Routes>
    )
}
