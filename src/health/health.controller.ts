import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Controller('health')
export class HealthController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async check() {
    const client = this.supabaseService.getClient();
    // Use a lightweight storage call to verify connectivity and credentials
    const { data, error } = await client.storage.listBuckets();
    if (error) {
      throw new HttpException({ ok: false, error }, HttpStatus.SERVICE_UNAVAILABLE);
    }
    return { ok: true, buckets: data?.length ?? 0 };
  }
}
