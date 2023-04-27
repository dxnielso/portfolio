import { useState } from "react";
import Container from "./Container";
import Modal from "./Modal";
import Service from "./Service";
import { services } from "../data/data";

const Services = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleClickModal = (id) => {
    setMostrarModal(true);
    setServicioSeleccionado(services.find((service) => service.id == id));
  };

  return (
    <>
      <Container id="services" titulo="Services">
        {mostrarModal && (
          <Modal
            servicio={servicioSeleccionado}
            onClickCloseModal={() => setMostrarModal(false)}
          />
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Service
              key={service.id}
              icono={service.icono}
              titulo={service.titulo}
              descripcion={service.descripcion}
              puntos={service.puntos}
              onClickOpenModal={() => handleClickModal(service.id)}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Services;
