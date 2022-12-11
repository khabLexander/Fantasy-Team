import { createSlice } from "@reduxjs/toolkit";

export const fantasySlice = createSlice({
  name: "fantasy",
  initialState: {
    isSaving: false,
    fantasyTeams: [
      // {
      //     id:null,
      //     name:'Unico',
      //     description:null,
      //     creationDate:null,
      //     players:[
      //         // {
      //         //     player_key:'',//id
      //         //     player_name:'',
      //         //     player_number:'',//numero de camiseta
      //         //     player_country:'',//pais
      //         //     player_age:'',//edad
      //         //     player_injured:'',//lesionado
      //         //     player_image:''//url de la imagne del jugador
      //         // }
      //     ],
      //     captain:null,//id del jugador ,
      //     rating:null,
      //     image:null,
      //     alignment:[]
      // }
    ],
    activeFantasyTeam: null, //obejto del fantasy team actual seleccionado,
    searchedPlayer:"ronaldo",
    searchedTeam:"a"
  },
  reducers: {
    setSearchedPlayer : (state, {payload})=>{
      state.searchedPlayer = payload
    },
    setSearchedTeam : (state, {payload})=>{
      state.searchedTeam = payload
    },
    setIsCreatingNewFantasyTeam: (state) => {
      state.isSaving = true;
    },
    setActiveFantasyTeam: (state, action) => {
      state.activeFantasyTeam = action.payload;
    },
    setUserInfo: (state, action) => {
      state = action.payload;
    },
    addNewFantasyTeam: (state, action) => {
      state.fantasyTeams.push(action.payload);
      state.isSaving = false;
    },
    updateFantasyTeam: (state, action) => {
      console.log(action);
      state.isSaving = false;
      state.fantasyTeams = state.fantasyTeams.map((fanteam) => {
        if (action.payload.id === fanteam.id) {
          return action.payload.newFantasyTeamValues;
        }
        return fanteam;
      });
    },
    deleteFantasyTeam: (state, action) => {
      state.fantasyTeams.splice(
        state.fantasyTeams.findIndex(
          (fanteam) => fanteam.id === action.payload
        ),
        1
      );
    },
    setFantasyTeams: (state, action) => {
      state.fantasyTeams = action.payload;
    },
    setPlayerOnFantasyTeam: (state, action) => {
      state.fantasyTeams = state.fantasyTeams.map((fanteam) => {
        if (action.payload.id === fanteam.id) {
          fanteam.players.push(action.payload.newPlayer);
        }
        return fanteam;
      });
    },
    deletePlayerFromTeam: (state, action) => {
      state.fantasyTeams = state.fantasyTeams.map((fanteam) => {
        if (action.payload.teamId === fanteam.id) {
            fanteam.players.splice(fanteam.players.findIndex(player => player.idPlayer === action.payload.playerId),1)
        }
        return fanteam;
      });
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setSearchedPlayer,
  setSearchedTeam,
  setIsCreatingNewFantasyTeam,
  setActiveFantasyTeam,
  setUserInfo,
  addNewFantasyTeam,
  updateFantasyTeam,
  deleteFantasyTeam,
  setFantasyTeams,
  setPlayerOnFantasyTeam,
  deletePlayerFromTeam,
} = fantasySlice.actions;
