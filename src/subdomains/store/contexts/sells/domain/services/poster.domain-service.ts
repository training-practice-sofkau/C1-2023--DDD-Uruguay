export interface IPosterDomainService<PosterDomainEntity> {
    updateImage(poster: PosterDomainEntity, newImage: string): PosterDomainEntity
    updatePrice(poster: PosterDomainEntity, newPrice: number): PosterDomainEntity
}