import { BarInfo, barInfoContext } from 'dals';
import { mongo } from 'mongoose';

export const getBarInfo = async (): Promise<BarInfo> =>
  await barInfoContext.findOne().lean();

export const getBarInfoById = async (id: string): Promise<BarInfo> =>
  await barInfoContext.findById(id).lean();
  
export const getBarInfoByInfoA = async (infoA: string): Promise<BarInfo> =>
  await barInfoContext.find({ infoA }).lean();

export const getBarInfoList = async (): Promise<BarInfo[]> =>
  await barInfoContext.find().lean();

export const saveBarInfo = async (barInfo: BarInfo): Promise<void> => {
  if (!barInfo) throw 'barInfo cannot be null or undefined';
  if (!barInfo._id) barInfo._id = new mongo.ObjectID();
  await barInfoContext.findByIdAndUpdate(barInfo._id, barInfo, { new: true, upsert: true });
};
