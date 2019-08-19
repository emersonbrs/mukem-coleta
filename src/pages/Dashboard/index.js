import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import ModalColeta from '~/components/ModalColeta';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const profile = useSelector(state => state.user.profile);
  const [loading, setLoading] = useState(false);
  const [coletorComing, setColetorComing] = useState(true);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function loadingModal() {
    if (!loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  function coletorComingButton() {
    if (!coletorComing) {
      setLoading(false);
      setColetorComing(true);
    } else {
      setColetorComing(false);
    }
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <div className="divMaterial">
          <div className="divInfo">
            <div className="bodyInfo">
              <div className="textColeta">
                <strong>Coleta requerida por {profile.name}</strong>
              </div>

              <button
                type="button"
                className="buttonInfo"
                onClick={loadingModal}
              >
                <strong>Informações</strong>
              </button>
            </div>

            {coletorComing ? (
              <button
                type="button"
                onClick={coletorComingButton}
                className="buttonCheckTrash"
              >
                <text>Enviar coletor</text>
              </button>
            ) : (
              <div className="buttonCheckTrashGoing">
                <text>Coletor encaminhado...</text>
              </div>
            )}
          </div>
          {loading ? <ModalColeta /> : <></>}
        </div>

        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <strong>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </strong>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
