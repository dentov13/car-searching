import React from 'react';

const Main = ({ owner, year, ownersCount, crashesCount }) => (
  <main className="main">
    {owner ? (
      <table className="report">
        <tbody>
          <tr className="report__row">
            <td className="report__column report__column_name">Владелец:</td>
            <td className="report__column">{owner}</td>
          </tr>
          <tr className="report__row">
            <td className="report__column report__column_name">
              Год производства:
            </td>
            <td className="report__column">{year}</td>
          </tr>
          <tr className="report__row">
            <td className="report__column report__column_name">
              Колличество владельцев:
            </td>
            <td className="report__column">{ownersCount}</td>
          </tr>
          <tr className="report__row">
            <td className="report__column report__column_name">Факты ДДП:</td>
            <td className="report__column">{crashesCount}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div className="hint">
        <h1 className="hint__description">
          Введите номерной знак автомобиля (например AA9999AI) и нажмине Enter
        </h1>
      </div>
    )}
  </main>
);

export default Main;
