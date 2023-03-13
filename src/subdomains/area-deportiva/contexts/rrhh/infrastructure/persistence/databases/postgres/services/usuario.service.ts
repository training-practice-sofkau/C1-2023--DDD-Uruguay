import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsuarioDomainService } from '@usuarios/domain';
import { UsuarioPostgresEntity } from '../entities/usuario-postgres.entity';
import { UsuarioRepository } from '../repositories/usuario.repository';

/**
 * Servicio de dominio para el manejo de usuarios
 *
 * @export
 * @class UsuarioService
 * @implements {IUsuarioDomainService<UsuarioPostgresEntity>}
 */
@Injectable()
export class UsuarioPostgresService
  implements IUsuarioDomainService<UsuarioPostgresEntity>
{
  /**
   * Creates an instance of UsuarioService.
   *
   * @param {UsuarioRepository} usuarioRepository Repositorio de usuarios
   * @memberof UsuarioService
   */
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  /**
   * Crea un usuario
   *
   * @param {UsuarioPostgresEntity} entity Entidad de usuario
   * @return {Promise<UsuarioPostgresEntity>} Entidad de usuario
   * @memberof UsuarioService
   */
  crearUsuario(entity: UsuarioPostgresEntity): Promise<UsuarioPostgresEntity> {
    return this.usuarioRepository.create(entity);
  }

  /**
   * Actualiza el email de un usuario
   *
   * @param {string} usuarioId Identificador del usuario
   * @param {UsuarioPostgresEntity} entity Entidad de usuario
   * @return {Promise<UsuarioPostgresEntity>} Entidad de usuario
   * @memberof UsuarioService
   */
  actualizarEmailDeUsuario(
    usuarioId: string,
    entity: UsuarioPostgresEntity,
  ): Promise<UsuarioPostgresEntity> {
    return this.usuarioRepository.update(usuarioId, entity);
  }

  /**
   * Actualiza el password de un usuario
   *
   * @param {string} usuarioId Identificador del usuario
   * @param {UsuarioPostgresEntity} entity Entidad de usuario
   * @return {Promise<boolean>} Verdadero si se actualizó el password
   * @memberof UsuarioService
   */
  async actualizarPasswordDeUsuario(
    usuarioId: string,
    entity: UsuarioPostgresEntity,
  ): Promise<boolean> {
    const data = await this.usuarioRepository.update(usuarioId, entity);
    if (data) return true;
    throw new NotFoundException('Usuario no encontrado');
  }

  borrarUsuario(usuarioId: string): Promise<boolean> {
    return this.usuarioRepository.delete(usuarioId);
  }

  buscarUsuarioPorUsuarioID(usuarioId: string): Promise<UsuarioPostgresEntity> {
    return this.usuarioRepository.findById(usuarioId);
  }
  async buscarUsuarioPorEmail(email: string): Promise<UsuarioPostgresEntity> {
    const data = await this.usuarioRepository.find({ where: { email } });
    if (data) return data[0];
    throw new NotFoundException('Usuario no encontrado');
  }

  async buscarUsuarioPorEmailYPassword(
    email: string,
    password: string,
  ): Promise<UsuarioPostgresEntity> {
    const data = await this.usuarioRepository.find({
      where: { email, password },
    });
    if (data) return data[0];
    throw new NotFoundException('Datos de usuario inválidos');
  }

  async validarUnicidadDelEmail(email: string): Promise<boolean> {
    const data = await this.usuarioRepository.find({ where: { email } });
    if (data) return true;
    return false;
  }
}
