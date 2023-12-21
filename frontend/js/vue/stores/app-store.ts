import { defineStore } from 'pinia';
import { ref } from 'vue';
import useDataStore from './data-store';
import { APP_STATUSES } from '../../utils/constants';

const useAppStore = defineStore('app', () => {
  const gameStatus = ref(APP_STATUSES.WELCOME);
  const startedTime = ref<number | null>(null);
  const gameTimerId = ref<NodeJS.Timer | null>(null);

  const changeGameStatus = (newStatus: APP_STATUSES) => {
    gameStatus.value = newStatus;
  };

  const changeStartedTime = (time: number) => {
    startedTime.value = time;
  };

  const clearTimer = () => {
    clearInterval(gameTimerId.value as NodeJS.Timer);
    gameTimerId.value = null;
  };

  const setTimerId = (id: NodeJS.Timer) => {
    gameTimerId.value = id;
  };

  const restartGame = async () => {
    const dataStore = useDataStore();

    await dataStore.getQuote();
    gameStatus.value = APP_STATUSES.STARTED;
    startedTime.value = null;
    clearTimer();
  };

  return {
    gameStatus,
    startedTime,
    gameTimerId,
    changeGameStatus,
    changeStartedTime,
    clearTimer,
    restartGame,
    setTimerId,
  };
});

export default useAppStore;
