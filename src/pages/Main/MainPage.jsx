import { FantasyLayout } from "../../ui/FantasyLayout";
import { TeamsList } from "./components/TeamsList";
import { LeaguesList } from "./components/LeaguesList";
import { PlayerList } from "./components/PlayerList";
import { Footer } from "../../ui/components/Footer";

export const MainPage = () => {
  return (
    <>
      <FantasyLayout>
        <div className="main-content">
          <PlayerList />
          <br />
          <TeamsList />
          <br />
          <LeaguesList />
          <br />
        </div>
      </FantasyLayout>
      <Footer />
    </>
  );
};
