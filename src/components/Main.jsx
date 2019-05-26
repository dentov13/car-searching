import React from 'react';

const Main = () => (
  <main className="main">
      <div className="hint" hidden>
        <h1 className="hint__description">
          Введите номерной знак автомобиля (например AA9999AI) и нажмине Enter
        </h1>
      </div>

      <table className="report">
        <tbody>
          <tr className="report__row">
            <td className="report__column report__column_name">Владелец:</td>
            <td className="report__column">Попов Юрий Анатольевич</td>
          </tr>
          <tr className="report__row">
            <td className="report__column report__column_name">
              Год производства:
            </td>
            <td className="report__column">2015</td>
          </tr>
          <tr className="report__row">
            <td className="report__column report__column_name">
              Колличество владельцев:
            </td>
            <td className="report__column">5</td>
          </tr>
          <tr className="report__row">
            <td className="report__column report__column_name">Факты ДДП:</td>
            <td className="report__column">0</td>
          </tr>
        </tbody>
      </table>
    </main>
);

export default Main;
