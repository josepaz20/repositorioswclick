//------------------------------------------------------------------------------
function bloqueoAjax() {
    $.blockUI(
            {
                message: $('#msgBloqueo'),
                css: {
                    border: 'none',
                    padding: '15px',
                    backgroundColor: '#000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    opacity: .85,
                    color: '#fff',
                    'z-index': 2000
                }
            }
    );
    $('.blockOverlay').attr('style', $('.blockOverlay').attr('style') + 'z-index: 1100 !important');
}

//------------------------------------------------------------------------------

function verRegistrar() {
    $.get('registrar', {}, setFormulario);
    bloqueoAjax();
}
function setFormulario(respuesta) {
    $("#divContenido").html(respuesta);
    $('#modalFormulario').modal('show');
}

function verDetalle(idAmpliacion) {
    $.get('detalle', {idAmpliacion: idAmpliacion}, setFormulario);
    bloqueoAjax();
}
function verAvance(idAmpliacion) {
    $.get('avance', {idAmpliacion: idAmpliacion}, setFormulario);
    bloqueoAjax();
}
function verActualizar(idAmpliacion) {    
    $.get('actualizar', {idAmpliacion: idAmpliacion}, setFormulario);
    bloqueoAjax();
}

//---------------------------------------------------------------------------

function validarRegistrar() {
    if (confirn("   DESEA REGISTRAR ESTA AMPLIACION DE RED ? ")) {
        bloqueoAjax();
        return true;
    } else {
        return false;
    }
}

function validarEditar() {
    if (confirm("   DESEA ACTUALIZAR ESTA AMPLIACION DE RED ? ")) {
        bloqueoAjax();
        return true;
    } else {
        return false;
    }
}

//---------------------------------------------------------------------------

function getMunicipios(idDpto) {
    $("#idMcpo").html('<option value="">Seleccione...</option>');
    if (idDpto !== '') {
        $.get('getMunicipio', {idDpto: idDpto}, setMunicipios);
        bloqueoAjax();
    }
}

function setMunicipios(datos) {
    
    $("#idMcpo").html(datos);
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
