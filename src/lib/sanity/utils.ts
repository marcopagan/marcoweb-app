import { sanity } from './client';
import type { BlockItem } from '$lib/types/BlockItem';
import type { Project } from '$lib/types/Project';


export const getBlocks = async (): Promise<BlockItem[]> => {
    return await sanity.fetch(`*[_type == "blockItem" && isPublished == true] | order(orderRank) {
        _id,
        _createdAt,
        title,
        x,
        y,
        h,
        content
    }`);
};

export const getProjects = async (): Promise<Project[]> => {
    return await sanity.fetch(`*[_type == "project" && isPublished == true] | order(orderRank) {
        _id,
        _createdAt,
        title,
    }`);
};