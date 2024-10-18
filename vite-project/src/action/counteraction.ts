export interface ICounter
{
    type:string
}

export const INC = () :ICounter => ({
  type: 'INCREMENT',
  
})
