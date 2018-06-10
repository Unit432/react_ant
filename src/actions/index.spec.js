import * as actions from './index'

describe('actions', () => {
  it('toggleSideMenu should create TOGGLE_SIDE_MENU action', () => {
    expect(actions.toggleSideMenu).toEqual({
      type: 'TOGGLE_SIDE_MENU'
    })
  })

  it('loadJobs should create LOAD_JOBS action', () => {
    const array = [{uid: 'bdef'}, {uid: 'geg3f'}]
    expect(actions.loadJobs(array)).toEqual({
      type: 'LOAD_JOBS',
      array
    })
  })

  it('fetch_jobs_request should create FETCH_JOBS_REQUEST action', () => {
    const job_type = 'tellActive'
    expect(actions.fetch_jobs(job_type)).toEqual({
      type: 'FETCH_JOBS_REQUEST',
      job_type
    })
  })
})
